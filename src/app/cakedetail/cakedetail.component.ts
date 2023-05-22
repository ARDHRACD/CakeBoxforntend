import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CakeService } from '../services/cake.service';
@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit{
  id:any
  cakeData:any
  constructor(private service:CakeService,private route:ActivatedRoute){
    this.id=this.route.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.service.getCakeDetail(this.id).subscribe(res=>this.cakeData=res)
  }
}
