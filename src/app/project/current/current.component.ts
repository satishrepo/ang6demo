import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { LoginService } from '../../login.service'
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
	
	@ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator; 

	dataList = [];
	
  constructor(private loginService : LoginService) { }
  
   displayedColumns= ["facilityName", "facilityId", "music", "movies"];
   
   collection = [];
   dataSource : any;
   
   filters = {
	   year : '2018',
	   duration : '2',
	   month : '2'
   };
   
   currentPage = 0
   
	paginationDetail = new BehaviorSubject(
	{
	 length: 10,
	 pageIndex: 0,
	 pageSize: 10
	});
   
   getData(){
	   
	   this.loginService.getTableData(this.filters, this.currentPage)
	   .subscribe( dt => {
			this.dataSource = new MatTableDataSource([...dt.entity.facilities, ...dt.entity.facilities, ...dt.entity.facilities, ...dt.entity.facilities]);
			console.log(this.dataSource)
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
	   },error => {
			console.log(error)
	   }
   }
   
   getUpdate(event) {
	  this.paginationDetail.next(event);
	  this.currentPage = event.pageIndex;
	  this.getData();
	  console.log(event)
	}

  ngOnInit() {
	  
		

	  this.getData();
	  
	  for (let i = 1; i <= 100; i++) {
		this.collection.push(`item ${i}`);
	  }
	  
	  this.dataList = [
		  { "name": "Afghanistan", "code": "AF" },
		  { "name": "Åland Islands", "code": "AX" },
		  { "name": "Albania", "code": "AL" },
		  { "name": "Algeria", "code": "DZ" },
		  { "name": "American Samoa", "code": "AS" },
		  { "name": "AndorrA", "code": "AD" },
		  { "name": "Angola", "code": "AO" },
		  { "name": "Anguilla", "code": "AI" },
		  { "name": "Antarctica", "code": "AQ" },
		  { "name": "Antigua and Barbuda", "code": "AG" }
		];
 
  
  }


}
