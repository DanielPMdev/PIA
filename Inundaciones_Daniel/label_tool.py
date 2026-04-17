import os
import cv2
import pandas as pd

# ---------------- CONFIG ----------------

BASE_DIR = "/home/aibg/Escritorio/CE_IAyBD/PIA/Inundaciones/River/FarsonDigital_CameraImages_NovDec2012"
OUTPUT_CSV = "labels.csv"

CAMERAS = [
    "TewkesburyCamera",
    "StrenshamLockCamera",
    "EveshamCamera",
    "DiglisLockCamera",
]

# ---------------------------------------


def resize_for_display(img, max_width=900, max_height=600):
    h, w = img.shape[:2]

    scale = min(max_width / w, max_height / h)

    if scale < 1:
        new_w = int(w * scale)
        new_h = int(h * scale)
        img = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)

    return img


def load_existing_labels():
    if os.path.exists(OUTPUT_CSV):
        return pd.read_csv(OUTPUT_CSV)
    else:
        return pd.DataFrame(columns=["camera", "filename", "label"])


def main():
    df = load_existing_labels()
    labeled_set = set(zip(df.camera, df.filename))

    cv2.namedWindow("Imagen", cv2.WINDOW_NORMAL)

    for cam in CAMERAS:
        cam_path = os.path.join(BASE_DIR, cam)
        images = sorted(os.listdir(cam_path))

        print(f"\n--- Cámara: {cam} ---")

        for img_name in images:
            if not img_name.endswith(".jpg"):
                continue

            if (cam, img_name) in labeled_set:
                continue  # ya etiquetada

            img_path = os.path.join(cam_path, img_name)
            img = cv2.imread(img_path)

            if img is None:
                continue

            img_display = resize_for_display(img)
            cv2.imshow("Imagen", img_display)

            print(f"\nCámara: {cam}")
            print(f"Archivo: {img_name}")
            print("Pulsa 0=Normal | 1=Precaución | 2=Inundación | q=Salir")

            key = cv2.waitKey(0)

            if key == ord("q"):
                df.to_csv(OUTPUT_CSV, index=False)
                print("\nGuardado y salida.")
                cv2.destroyAllWindows()
                return

            elif key in [ord("0"), ord("1"), ord("2")]:
                label = int(chr(key))
                df.loc[len(df)] = [cam, img_name, label]
                df.to_csv(OUTPUT_CSV, index=False)
                labeled_set.add((cam, img_name))
                print(f"Guardado: {label}")

            else:
                print("Tecla inválida, repitiendo imagen...")
                cv2.destroyAllWindows()
                continue

            cv2.destroyAllWindows()

    df.to_csv(OUTPUT_CSV, index=False)
    print("\nEtiquetado completo.")


if __name__ == "__main__":
    main()
