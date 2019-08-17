import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../../servicios/data-api.service'

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
public dias: number;
public modelo: string;
public precio: number;

  constructor(private dataApiService: DataApiService) { }

calculo(){
  if(this.modelo == "2016 Honda CR-V EX"){
    this.precio = this.dias * 14.00;
  }else if(this.modelo == "Hyundai Accent"){
    this.precio = this.dias * 7.00;
  }else if(this.modelo == "Hilux 4WD Double Cab SR5 Cruiser Ute"){
    this.precio = this.dias * 25.00;
  }
} 
  ngOnInit() {
  }
  guardarRegistro(alquilerForm: NgForm): void{
    if(alquilerForm !=null && ""){
    this.dataApiService.addAlquilados(alquilerForm.value);
    alert('Se han enviado los datos');
    }else{
    alert('Debe completar todos los campos');
    }
}
resetForm(alquilerForm: NgForm){
if(alquilerForm != null){
alquilerForm.reset();
    }
  }

}
