export interface MovieEntry {
    id: number,
    nombre: string,
    genero: string,
    estreno: number,
    duracion: number,
    director: string,
    imagen: string,
    calificacion: number
}

export interface MovieRequest {
    nombre: string,
    genero: string,
    director: string,
    imagen: string,
    estreno: number,
    duracion: number,
    calificacion: number
}
