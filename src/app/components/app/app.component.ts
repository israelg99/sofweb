import { Component, OnInit } from '@angular/core';

import '../../../window/style.scss'
import '../../../../lib/bootstrap/css/bootstrap-theme.min.scss'
import '../../../../lib/bootstrap/css/bootstrap.min.scss'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void { }
}
