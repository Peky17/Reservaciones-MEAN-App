import { Component } from '@angular/core';

@Component({
  selector: 'app-select-asientos',
  templateUrl: './select-asientos.component.html',
  styleUrls: ['./select-asientos.component.css'],
})
export class SelectAsientosComponent {
  container!: HTMLElement;
  seats!: NodeListOf<Element>;
  count!: HTMLElement;
  total!: HTMLElement;
  movieSelect!: HTMLSelectElement;
  ticketPrice!: number;

  ngOnInit() {
    this.container = document.querySelector('.container')!;
    this.seats = document.querySelectorAll('.row .seat:not(.sold)');
    this.count = document.getElementById('count')!;
    this.total = document.getElementById('total')!;
    this.movieSelect = document.getElementById('movie') as HTMLSelectElement;

    this.populateUI();

    this.ticketPrice = +this.movieSelect.value;

    // Movie select event
    this.movieSelect.addEventListener('change', (e: Event) => {
      this.ticketPrice = +this.movieSelect.value;
      this.setMovieData(this.movieSelect.selectedIndex, this.movieSelect.value);
      this.updateSelectedCount();
    });

    // Seat click event
    this.container.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.classList.contains('seat') &&
        !target.classList.contains('sold')
      ) {
        target.classList.toggle('selected');
        this.updateSelectedCount();
      }
    });

    // Initial count and total set
    this.updateSelectedCount();
  }

  populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')!);

    if (selectedSeats !== null && selectedSeats.length > 0) {
      this.seats.forEach((seat: Element, index: number) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
      this.movieSelect.selectedIndex = parseInt(selectedMovieIndex, 10);
    }
  }

  setMovieData(movieIndex: number, moviePrice: string) {
    localStorage.setItem('selectedMovieIndex', movieIndex.toString());
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }

  updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = Array.from(selectedSeats).map((seat: Element) =>
      Array.from(this.seats).indexOf(seat)
    );
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length - 1;
    this.count.innerText = selectedSeatsCount.toString();
    this.total.innerText = (selectedSeatsCount * this.ticketPrice).toString();
    this.setMovieData(this.movieSelect.selectedIndex, this.movieSelect.value);
  }
}
