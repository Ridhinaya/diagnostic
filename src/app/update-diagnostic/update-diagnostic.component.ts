import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnostic } from '../diagnostic';
import { DiagnosticService } from '../diagnostic.service';

@Component({
  selector: 'app-update-diagnostic',
  templateUrl: './update-diagnostic.component.html',
  styleUrls: ['./update-diagnostic.component.css']
})
export class UpdateDiagnosticComponent implements OnInit {

  id:number;
  diagnostic:Diagnostic= new Diagnostic();
 

  constructor(private diagnosticService: DiagnosticService, 
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.diagnosticService.getDiagnosticById(this.id).subscribe( data => {
    this.diagnostic=data;
    },error => console.log(error))
    };
  onSubmit(){      
    //connecting the angular with the add diagnostic 
    this.diagnosticService.updateDiagnostic(this.id).subscribe(data =>{
      this.gotoDiagnosticList();
      }, error => console.log(error));
      }
  gotoDiagnosticList(){
    this.router.navigate(['/diagnostics'])
      }
}
