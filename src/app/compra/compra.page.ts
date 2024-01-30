import { Component, OnInit } from '@angular/core';
import {ProductoService } from '../services/producto.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {

  registrarForm: FormGroup;
  listaItemsCarrito: any[] = [];
  total: number = 0;
  imagenSeleccionada: File | null = null;

  constructor(
    private service: ProductoService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registrarForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      descripcion: new FormControl('', [Validators.required, Validators.minLength(4)]),
      precio: new FormControl(0, [Validators.required, Validators.minLength(3)]),
      cantidad: new FormControl(0, [Validators.required, Validators.maxLength(3)]),
      foto: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const producto = this.registrarForm.value;
    const imagenSeleccionada = this.imagenSeleccionada || new File([], 'default');

    this.service.Guardar(producto, imagenSeleccionada).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/catalogo']);
      },
      error => {
        console.error(error);
      }
    );
  }

  cerrarModal() {
    this.modalCtrl.dismiss(null, 'cerrado');
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagenSeleccionada = file;
  }


}

