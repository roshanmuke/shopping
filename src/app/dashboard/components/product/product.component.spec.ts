import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, } from '@angular/common/http/testing';

import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule , HttpClientModule,  RouterModule.forRoot([]),],
      declarations: [ ProductComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', 
     ()=> {
    expect(component).toBeTruthy();
  })
  
});
