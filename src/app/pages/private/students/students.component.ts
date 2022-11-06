import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/interfaces/User/student';
import { StudentService } from 'src/app/services/entities/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class StudentsComponent implements OnInit {

  studentDialog: boolean = false;
  students: Student[] = [];
  student?: Student;
  selectedStudents: Student[] = [];
  submitted: boolean = false;

  constructor(
    private service: StudentService, 
    private messageService: MessageService, 
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
      this.service.list().subscribe((result: Student[]) => {
        this.students = result;
      },
      (error) => {

      });
  }

  openNew() {
      //this.student = {};
      this.submitted = false;
      this.studentDialog = true;
  }

  deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.students = this.students.filter(val => !this.selectedStudents.includes(val));
              this.selectedStudents = [];
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
          }
      });
  }

  editProduct(student: Student) {
      this.student = {...student};
      this.studentDialog = true;
  }

  deleteProduct(student: Student) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + student.lastname + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.students = this.students.filter(val => val.id !== student.id);
              //this.student = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          }
      });
  }

  hideDialog() {
      this.studentDialog = false;
      this.submitted = false;
  }
  
  saveProduct() {
      /*this.submitted = true;

      if (this.student.name.trim()) {
          if (this.student.id) {
              this.students[this.findIndexById(this.student.id)] = this.student;                
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          }
          else {
              //this.student.id = this.createId();
              //this.student.image = 'product-placeholder.svg';
              //this.student.push(this.product);
              this.student.firstname = 'test';
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.students = [...this.students];
          this.studentDialog = false;
          //this.student = {};
      }*/
      console.log("Guardar")
  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.students.length; i++) {
          if (this.students[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

}
