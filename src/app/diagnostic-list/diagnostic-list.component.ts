import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diagnostic } from '../diagnostic';
import { DiagnosticService } from '../diagnostic.service';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrls: ['./diagnostic-list.component.css']
})
export class DiagnosticListComponent implements OnInit {

  diagnostics:Diagnostic[];
  
  constructor(private diagnosticService:DiagnosticService,private router:Router) { }

  ngOnInit(): void {
    this.getDiagnostics();
  }
  private getDiagnostics(){
    this.diagnosticService.getDiagnosticsList().subscribe( data => {
      this.diagnostics=data;
    })
  }
     
  updateDiagnostic(id:number){
    this.router.navigate(['update-diagnostic',id]);
    
  }
  
}
