import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
import{map, switchMap, of, from} from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  //instanciamos servicio de autentificacion en el guardian (forma local)
  const servicioAuth = inject(AuthService);
//instanciamos servicio de rutas de forma local
  const servicioRutas = inject (Router);
//especificamos cual es el rol que va a esperar el guardian para actvarla
  const rolesperado = 'admin'
  return from(servicioAuth.obtenerUid()).pipe(
    switchMap(uid=>{
      if(uid){
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol =>{
            if(rol === rolesperado){
              console.log("usuario verificado como administrador.")
              return true;
            }else{
              //denegamos acceso al usuario
              return false;
            }
          })
        )
      }else {
        console.log("usuario no validado. permisos insuficientes.");

        return of(servicioRutas.createUrlTree(['/inicio']))
      }
    })
  )

};
