import { Router } from "express";

export type Nivel = 'Candidato' | 'Reunião de Jovens' | 'Culto Oficial' | 'Oficializado'

export interface Instrumento {
  nome: string
  categoria: string
  tonalidade: string
}

export interface Aluno {
  id: number
  nome: string
  idade: number | undefined
  instrumento: Instrumento
  nivel: Nivel,
  ultimaLicao: number | undefined
  instrutor: boolean
  desejaTocar: boolean
  faltas: number
  faltasJustificadas: boolean
  possuiMSA: boolean
  possuiMetodo: boolean
  possuiHinario: boolean
  batizado: boolean
  notas?: number[]
}

const studentRouter = Router()

const students: Aluno[] = []



export { studentRouter }