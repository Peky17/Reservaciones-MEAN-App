import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineService } from 'src/app/services/cine.service';
import Swal from 'sweetalert2';

interface Seat {
  sold: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-select-asientos',
  templateUrl: './select-asientos.component.html',
  styleUrls: ['./select-asientos.component.css'],
})
export class SelectAsientosComponent {
  cineId: string = '';
  cineData: any;
  funciones: any[] = [];
  seatRows: Seat[][] = [];
  selectedSeatPosition: { row: number; seat: number } | null = null;
  selectedSeatsCount: number = 0;
  ticketPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cineService: CineService
  ) {}

  ngOnInit() {
    // Get cine data
    this.cineId = this.route.snapshot.paramMap.get('id')!;
    this.cineService.getCineById(this.cineId).subscribe({
      next: (response) => {
        if (
          response.cine == null ||
          response.cine == undefined ||
          response.cine.length === 0
        ) {
          Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'No se encontró el cine seleccionado.',
          });
        } else {
          this.cineData = response.cine;
        }
      },
      error: (error) => {
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'No se encontró el cine seleccionado.',
        });
        console.log(error);
      },
    });
    // Get funciones by cine
    this.getFuncionesByCine(this.cineId);
  }

  ngAfterViewInit() {
    this.updateSelectedCount();
  }

  setMovieData(movieIndex: number, moviePrice: string) {
    localStorage.setItem('selectedMovieIndex', movieIndex.toString());
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }

  // updateSelectedCount() {
  //   this.selectedSeatsCount = this.seatRows.reduce((count, row) => {
  //     return count + row.filter((seat) => seat.selected).length;
  //   }, 0);
  // }

  // toggleSeatSelection(seat: Seat) {
  //   if (!seat.sold) {
  //     seat.selected = !seat.selected;
  //     this.updateSelectedCount();
  //   }
  // }

  updateSelectedCount() {
    this.selectedSeatsCount = this.seatRows.reduce((count, row) => {
      return count + row.filter((seat) => seat.selected).length;
    }, 0);
  }

  saveSelectedSeatsToLocalStorage(row: number, seat: number) {
    let selectedSeats =
      JSON.parse(localStorage.getItem('selectedSeats')!) || [];
    if (this.seatRows[row][seat].selected) {
      selectedSeats.push({ row, seat });
    } else {
      selectedSeats = selectedSeats.filter(
        (seatPosition: { row: number; seat: number }) =>
          seatPosition.row !== row || seatPosition.seat !== seat
      );
    }
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }

  toggleSeatSelection(row: number, seat: number) {
    if (!this.seatRows[row][seat].sold) {
      this.seatRows[row][seat].selected = !this.seatRows[row][seat].selected;
      this.updateSelectedCount();
      this.saveSelectedSeatsToLocalStorage(row, seat);
      if (this.seatRows[row][seat].selected) {
        this.selectedSeatPosition = { row, seat };
        console.log(this.selectedSeatPosition);
      } else {
        this.selectedSeatPosition = null;
      }
    }
  }

  // toggleSeatSelection(row: number, seat: number) {
  //   if (!this.seatRows[row][seat].sold) {
  //     this.seatRows[row][seat].selected = !this.seatRows[row][seat].selected;
  //     this.updateSelectedCount();
  //     if (this.seatRows[row][seat].selected) {
  //       this.selectedSeatPosition = { row, seat };
  //       console.log(this.selectedSeatPosition);
  //     } else {
  //       this.selectedSeatPosition = null;
  //     }
  //   }
  // }

  getFuncionesByCine(id_cine: string) {
    this.cineService.getAllFuncionesInCines(id_cine).subscribe({
      next: (response) => {
        this.funciones = response.funciones;
        this.seatRows = this.generateSeatRows();
        this.ticketPrice = +this.funciones[0].precio;
        this.setMovieData(0, this.funciones[0].precio);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  generateSeatRows(): Seat[][] {
    // Generate seat rows based on your seat arrangement logic
    // Example implementation:
    const rows: Seat[][] = [];
    const numRows = 8;
    const numSeatsPerRow = 8;

    for (let i = 0; i < numRows; i++) {
      const row: Seat[] = [];
      for (let j = 0; j < numSeatsPerRow; j++) {
        const seat: Seat = { sold: false, selected: false };
        row.push(seat);
      }
      rows.push(row);
    }

    return rows;
  }
}
