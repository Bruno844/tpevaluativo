import { Injectable } from '@angular/core';
// Servicio en la nube de autentificación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
// Accedemos directamente al servicio Firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //propiedad privada para guardar rol de usuario
  private rolUsuario: string| null =null;
  // Referenciar Auth de Firebase en el servicio y ServicioFirestore
  constructor(
    private auth: AngularFireAuth, 
    private servicioFirestore: AngularFirestore
  ) { }

  // FUNCIÓN PARA REGISTRO
  registrar(email: string, password: string){
    // retorna el valor que es creado con el método "createEmail..."
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // FUNCIÓN PARA INICIO DE SESIÓN
  iniciarSesion(email: string, password: string){
    // validar la información del usuario -> saber si existe en la colección
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // FUNCIÓN PARA CERRAR SESIÓN
  cerrarSesion(){
    // devuelve una promesa vacía -> quita token
    return this.auth.signOut();
  }
  // FUNCIÓN PARA TOMAR EL UID
  async obtenerUid(){
    // Nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser;

    /*
      Si el usuario no respeta la estructura de la interfaz /
      Si tuvo problemas para el registro -> ej.: mal internet
    */
    if(user == null){
      return null;
    } else {
      return user.uid;
    }}

  obtenerUsuario(email: string){
    /**
     * Retornamos del servicioFirestore la colección de 'usuarios', buscamos una referencia en los email registrados
     * y los comparamos con los que ingrese el usuario al iniciar sesión, y lo obtiene con el '.get()'
     * Lo vuelve una promesa => da un resultado RESUELTO o RECHAZADO
     */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
  //FUNCION PARA OBTENER EL ROL DEL USUARIO
  obtenerRol(uid:string): Observable<string|null>{
    return this.servicioFirestore.collection("usuarios").doc(uid).valueChanges().pipe(map((usuario:any)=>usuario ? usuario.rol:null));
  }
  setUsuarioRol(rol:string){
    this.rolUsuario=rol;
  }
  //obteneer el rol y asignarlo el rol de la variable local
  getUsuarioRol(): string| null{
  return this.rolUsuario;
}
  }
