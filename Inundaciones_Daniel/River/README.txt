
1. PROJECT
------------

Title: Data Assimilation for REsilient city (DARE)
Dates: November 2016 – April 2020
Funding organisation: EPSRC
Grant no.: EP/P002331/1

We would like to thank and acknowledge The Engineering and Physical Sciences Research Council (EPSRC) who funds this project, The University of Reading, and Farson Digital Ltd for providing access to their river camera images. 


2. DATASET
------------

Title: River water level height measurements obtained from river cameras near Tewkesbury
Description: This dataset contains extracted water level observations (WLOs) from four river cameras located on rivers Severn and Avon near Tewkesbury, UK, and owned by Farson Digital Ltd The data is extracted from hourly daylight river camera images between 21st Nov – 5th Dec 2012. The dataset consists of spreadsheets containing extracted water level data for each camera along with necessary metadata, all available Farson Digital Ltd river camera images between 21st Nov – 5th Dec 2012, and 3D point measurements of the location of each camera and locations of all measured points in the field-of-view for each camera.  


Publication Year: 2020

Creator(s): Dr. Sanita Vetra-Carvalho, Prof. Sarah L. Dance, Dr. David Mason, Dr. Javier Garcia-Pintado
Organisation(s): University of Reading, University of Bremen
Rights-holder(s): University of Reading

Source(s): 
* The river camera images are provided by Farson Digital Ltd company (www.farsondigitalwatercams.com). 
* The field-of-view information data used to assess the water height in the images was obtained by the DARE project members in April 2018 with agreement from Farson Digital Ltd.



3. TERMS OF USE
-----------------

Copyright 2020 University of Reading. This dataset is licensed by the rights-holder(s) under a Creative Commons Attribution 4.0 International Licence: https://creativecommons.org/licenses/by-nc/4.0/ .


4. CONTENTS
------------
File listing

- ExtractedWLO_Data folder containing spreadsheets with extracted water level observations, one file per camera. This is the main data folder. File labelling: 
RiverCamera_WaterLevelObservations_NovDec2012_CAMERANAME.xls

- RiverCameraImages2012 folder holds all river camera images split into four subfolders one for each of the four river cameras: Evesham, Strensham, Tewkesbury, and Diglis Lock (subfolder names reflect actual camera location, e.g. EveshamCamera). Each of the single camera folders, e.g. EveshamCamera, contain all of the images between 21st Nov - 5th Dec 2012 for that camera. Images from Farson Digital Ltd were available at hourly interval in the daylight (mostly between 7am and 4pm UK time). These files are saved in .jpj format and do not require any special software. 
Each image file is labelled as follows: ****y_**m_**d_**h.jpg
  

- CameraFieldOfViewMeasurementData folder contains two folders labelled GNSS_Actualdata and TS_ActualData which in turn contain point measurements obtained on DARE field trip in April 2018. The two folders correspond to the two instruments used to measure the point spatial data: Leica GNSS and Leica Total Station 12 (TS12) instruments. 
The measurements contain 3D spatial location data of each of the cameras as well as various points in the field-of-view of the camera used to manually extract river water level height from river camera images. 
In the subfolders there are two files for each of the cameras one in .txt format containing minimal data (measured point instrument id, lat/lon, and vertical height information). The other file type is .xml which includes the basic information in .txt file as well as a very detailed information of the measured points including spatial instrument errors, base station locations, number of satellites used by the instrument, also including instrument, characteristics and data. File labelling is simply cameraname.txt (or .xml). Data does not require any special software to be read. 



5. METHOD and PROCESSING
--------------------------

The water level observation data was extracted manually looking at the images and correlating the closest measured point in the field-of-view of the camera to the water level in the image. Knowing the 3D coordinates of other measured points in the field-of-view of the image allows us to assign an uncertainty for each WLO value we extracted. We exclude the data where the uncertainty would have been higher than +/-25cm. 

There are times especially at the beginning and end of the data window (i.e. for dates 21, 22, 23 of November 2012 and 2,3,4,5 December 2012) where for some of the cameras there are no extracted WLOs when river is in bank, in particular Diglis Lock camera. This is due to the lack of distinct markers in the field-of-view of the camera when river is in bank.

The 3D accurate point locations in the field-of-view of each camera as well as accurate 3D location of the camera itself were measured by two instruments: Leica Total Station (TS12) and Leica GNSS (CS10/15). Manual for TS12 can be found here: http://surveyequipment.com/assets/index/download/id/107/ and for GNSS here: https://www.surveyequipment.com/PDFs/Leica_Viva_CS10_CS15_User_Manual.pdf . Note that since the instrument error in the vertical direction is much smaller than the human error, we have not included the instrument error in the error element of the extracted WLOs. 

Data has not been altered nor normalised in this data set.
