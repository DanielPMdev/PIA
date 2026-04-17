## SKILL: Patrón de componentes React para este proyecto

Todos los componentes siguen este patrón exacto:

1. SEPARACIÓN de responsabilidades:
   - El componente solo renderiza, NO hace fetch
   - El fetch lo hace un custom hook en frontend/src/hooks/
   - El hook llama al servicio en frontend/src/services/
   - El servicio llama al backend Express

2. ESTADOS obligatorios en cada hook que hace fetch:
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

3. RENDERIZADO condicional obligatorio en el componente:
   if (loading) return <LoadingSpinner />;
   if (error) return <ErrorMessage message={error} />;
   if (!data) return null;

Aplica este patrón siempre que crees componentes o hooks nuevos.