import { Component,OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  cake:any
  id:any
  constructor(private service:CakeService,private router:Router){}
  ngOnInit(): void {
    this.service.getAllCakes().subscribe(res=>this.cake=res)
  }
  redirectTocakeDetails(id:any){
    this.router.navigateByUrl(`cakes/${id}`)
  }
}
