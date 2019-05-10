import { NgModule } from '@angular/core';

import { ArrayDisplayPipe } from './pipes/array-display.pipe';
import { HomeDataSearch } from './pipes/home-data-search.pipe';
import { CodeExampleDataSearch } from './pipes/code-example-data-search.pipe';

@NgModule({
    declarations: [
        ArrayDisplayPipe,
        HomeDataSearch,
        CodeExampleDataSearch,
    ],
    exports: [ArrayDisplayPipe, HomeDataSearch, CodeExampleDataSearch]
})
export class PipesModule { }