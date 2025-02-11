
// tipo de dato para la imagen de la API de la NASA
export type PostImage = {
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;
  };
  
  // tipo de dato para las rutas de la aplicación
  export type RootStackParams = {
    Home: undefined;
    Detail: PostImage;
  };

