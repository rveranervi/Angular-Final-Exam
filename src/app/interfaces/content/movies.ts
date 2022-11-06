export interface MovieEntry {
    id: number,
    nombre: string,
    genero: string,
    director: string,
    imagen: string,
    pais: string,
    calificacion: number
}

export interface MovieRequest {
    nombre: string,
    genero: string,
    director: string,
    imagen: string,
    pais: string,
    calificacion: number
}
