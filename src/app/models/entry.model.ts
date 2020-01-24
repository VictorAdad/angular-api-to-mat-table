export interface SingleEntry {
    contacto_id: number;
    fec_registro: number;
    tema_id: number;
    origen: string;
    nombre: string;
    estado: number;
    poblacion: number;
    email: string;
    comentario: string;
    estatus: number;
    espera_resp: number;
    telefono: string;
    tipo_cont: number;
    fec_asigna: string;
    fec_cliente: string;
    fec_cierre: string;
    motivo_cierre: string;
}

export interface DialogData {
    comment: string;
    contacto_id: string;
    nombre: string;
    email: string;
    fec_registro: string;
    origen: string;
    telefono: string;
    tema_id: string;
}
