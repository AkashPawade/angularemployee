import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { EmpManagementServicesService } from 'src/app/services/management-service.service';


@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  departments:Department[]

  constructor(private service:EmpManagementServicesService) { }

  ngOnInit(): void {
    this.listOfDepartments();
  }

  listOfDepartments(){
    this.service.getAllDepartment().subscribe(data =>{
      console.log(data);
      this.departments= data;
     
    })
  }

}
