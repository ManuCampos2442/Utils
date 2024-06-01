
// Validar que ni el correo ni la direccion empiecen con numeros
/* Activacion:   <div *ngIf="!correoValido(registroClienteDTO.direccion) && (direccion.dirty || direccion.touched)"
                    class="invalid-feedback">
                        La dirección no puede comenzar con un número.
                </div>
*/
correoValido(correo: string): boolean {
    return !/^\d/.test(correo); // Verifica que no comience con un número
}

direccionValida(direccion: string): boolean {
    return !/^\d/.test(direccion); // Verifica que no comience con un número
}
//______________________________________________________________________________





// Metodo que no permite registrar una fecha anterior a la del dia actual (Quitar [min]="getMinDate()" si no se necesita)
/*
 <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">Fecha: </label>
        <div class="col-sm-10">
            <input type="date" name="fechaCita" [(ngModel)]="registroCitaDTO.fechaCita" class="form-control" [min]="getMinDate()"  />
         </div>
     </div>
*/
getMinDate(): string {
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}
//______________________________________________________________________________



