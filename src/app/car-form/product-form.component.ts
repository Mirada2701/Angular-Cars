import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarsService } from '../services/cars.service';
import { BrandModel, CarModel, CategoryModel, EngineModel } from '../models/cars';
import { DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class CarFormComponent implements OnInit{

  form: FormGroup;
  editMode = false;
  car: CarModel | null = null;


  categories:CategoryModel[] =[]
  brands:BrandModel[] =[]
  engines:EngineModel[] =[]

  constructor(
    fb: FormBuilder,
    private snackBar: MatSnackBar,
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      id:[0],
      brandId: [0, Validators.required],
      price: [0, Validators.required],
      quantity:[0,Validators.required],
      imageUrl: ['', Validators.required],
      model: ['', Validators.required],
      discount: [0, [Validators.min(0), Validators.max(100)]],
      description: [null, Validators.maxLength(2000)],
      categoryId: [0, Validators.required],
      engineId: [0, Validators.required],
      color:['',Validators.required],
      year: [new Date(),Validators.required]
    });
  }
  submit() {
    if (!this.form.valid) {
      this.openSnackBar("Invalid data.");
      return;
    }
    let model = this.form.value;
    if (model.description === "")
      model.description = null;


    if (this.editMode) {
      this.carsService.edit(model).subscribe(x => {
        this.openSnackBar("Car was updated successfully.");
        this.back();
      });
    }
    else {
      this.carsService.create(model).subscribe(x => {
        this.openSnackBar("Car was created successfully.");
        this.back();
      });
    }
  }
  openSnackBar(msg: string) {
    this.snackBar.open(msg, "OK", {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  back() {
    history.back();
  }

  ngOnInit(): void {
    this.carsService.getCategories().subscribe(data => this.categories = data);
    this.carsService.getBrands().subscribe(data => this.brands = data);
    this.carsService.getEngines().subscribe(data => this.engines = data);

    const carId = Number(this.route.snapshot.paramMap.get('id'));
    if (carId) {
      this.editMode = true;
      this.carsService.get(carId).subscribe(data => {
        this.car = data;
        this.form.patchValue(this.car);
        this.form.controls["categoryId"].setValue(this.car.categoryId?.toString());
        this.form.controls["brandId"].setValue(this.car.brandId?.toString());
        this.form.controls["engineId"].setValue(this.car.engineId?.toString());
      });
  }

  }}
