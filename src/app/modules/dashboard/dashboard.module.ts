import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipes/recipes-list/recipe-item/recipe-item.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipeFormComponent } from './components/recipes/recipe-form/recipe-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { RecipesHomeComponent } from './components/recipes/recipes-home/recipes-home.component';
import { MenuIconComponent } from './components/header/menu-icon/menu-icon.component';
import {RecipeService} from './services/recipe.service';
import {FileUploadService} from './services/file-upload.service';
import {NgxStarRatingModule} from 'ngx-star-rating';
import {QuillModule} from 'ngx-quill';
import { RecipePreviewComponent } from './components/recipes/recipe-preview/recipe-preview.component';
import {SharedModule} from '../shared/shared.module';
import {ShoppingService} from './services/shopping.service';
import { ShoppingFormComponent } from './components/shopping/shopping-form/shopping-form.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';

const components = [DashboardComponent, HeaderComponent, RecipesComponent,
  RecipesListComponent, RecipeItemComponent, RecipeFormComponent, ShoppingComponent,
  RecipesHomeComponent, MenuIconComponent, RecipePreviewComponent];
const modules = [CommonModule, DashboardRoutingModule, HttpClientModule,
  FormsModule, ReactiveFormsModule, NgxStarRatingModule, SharedModule,
  QuillModule.forRoot({
    theme: 'snow',
    modules: {
      toolbar: {
        container:
          [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'size': ['small', 'normal', 'large']}],
            [{color: []}, {'background': []}],
          ],
      }
    }
  })];
const services = [RecipeService, FileUploadService, ShoppingService];

@NgModule({
  declarations: [...components, ShoppingFormComponent, ShoppingListComponent],
    imports: [...modules],
  providers: [...services]
})
export class DashboardModule { }
