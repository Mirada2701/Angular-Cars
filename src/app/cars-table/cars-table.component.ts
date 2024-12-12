import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CarModel} from '../models/cars';
import { CarsService } from '../services/cars.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars-table',
  imports: [MatTableModule, MatPaginatorModule,DatePipe,MatIconModule, MatButtonModule,RouterLink],
  templateUrl: './cars-table.component.html',
  styleUrl: './cars-table.component.css'
})

export class CarsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'image', 'quantity' ,'brand', 'model', 'category', 'engine', 'year', 'color','price', 'actions'];
  dataSource = new MatTableDataSource<CarModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(
    private carsService: CarsService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    carsService.getAll().subscribe(data =>
      this.dataSource.data = data
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(carBrand: string, carId: number): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration: '50ms',
      exitAnimationDuration: '50ms',
      data: {
        carBrand: carBrand,
        carId: carId
      }
    });

    ref.afterClosed().subscribe(idToDelete => {
      if (idToDelete) {
        this.carsService.delete(idToDelete).subscribe(res =>{

          this.dataSource.data = this.dataSource.data.filter(x => x.id !== idToDelete);

          this._snackBar.open('Deleted succesfully', 'Dismiss', {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
        })
      }
    });
  }
}
