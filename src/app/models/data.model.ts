// export interface UserModel {
//     id: string;
//     email: string;
//     first_name: string;
//     last_name: string;
//     avatar: string;
// }

// // tslint:disable-next-line:prefer-const
// let user = <UserModel>{};
// user.id = '';
// user.email = '';
// user.first_name = '';
// user.last_name = '';
// user.avatar = '';

// --- New data model for Christhian Arturo's API ---
export interface ContactUsModel {
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

let user = <ContactUsModel>{};
user.contacto_id = 0;
user.fec_registro = 0;
user.tema_id = 0;
user.origen = '';
user.nombre = '';
user.estado = 0;
user.poblacion = 0;
user.email = '';
user.comentario = '';
user.estatus = 0;
user.espera_resp = 0;
user.telefono = '';
user.tipo_cont = 0;
user.fec_asigna = '';
user.fec_cliente = '';
user.fec_cierre = '';
user.motivo_cierre = '';

