import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ConditionalStatementsComponent} from "./conditional-statements/conditional-statements.component";

@NgModule({
  declarations:[ConditionalStatementsComponent],
  imports: [
    RouterModule.forRoot([
      {path: 'condition-statements', component: ConditionalStatementsComponent}
    ]),
  ],
  providers: []
})
export class App17Module {}
