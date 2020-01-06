import { OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';

export abstract class BaseModalComponent implements OnInit {

    constructor(
        public router: Router,
        public sessionService: SessionService,
        public dialogRef: MatDialogRef<any>,
        public dialog: MatDialog) {
    }

    public ngOnInit() {
    }

    public close(response: any) {
        this.dialogRef.close(response);
    }

    public closeModal(response?: any) {
        this.dialogRef.close(response);
    }
}
