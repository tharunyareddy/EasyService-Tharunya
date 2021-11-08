import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../model/contract';
import { ContractorService } from '../services/contractor.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var anime: any;
@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css'],
  providers: [NgbCarouselConfig]

})
export class ContractorDetailsComponent implements OnInit, AfterViewInit {
  contractId: number;
  contract: Contract;
 
  images = [
    { src: "https://picsum.photos/id/700/900/500"},
    { src: "https://picsum.photos/id/1011/900/500"},
    {src: "https://picsum.photos/id/984/900/500"}
  ];
  constructor(
    config: NgbCarouselConfig,
    private _contractorService: ContractorService,
    private activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (map) => (this.contractId = parseInt(map.get('id')))
    );

    this._contractorService.getById(this.contractId).subscribe((response) => {
      this.contract = response;
      console.log(this.contract);
    });
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.contract-page');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.contract-page .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.contract-page',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }


  onClick() {
    this._route.navigate(['/contractor']);
  }
}
