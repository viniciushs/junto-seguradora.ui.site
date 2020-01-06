import { OnInit, Inject, OnDestroy } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

export abstract class BaseComponent implements OnInit, OnDestroy {

    constructor(
        public router: Router,
        public sessionService: SessionService,
        public dialog?: MatDialog) {
    }

    public ngOnInit() {
        this.load();
    }

    public ngOnDestroy(): void {
    }

    public load(): void {
    }

    // public openModal(target: any): MatDialogRef<unknown, any> {
    //     return this.dialog.open(target, {
    //         width: this.mobile ? '100%' : 'auto',
    //         maxWidth: this.mobile ? '100%' : 'auto',
    //         height: this.mobile ? '100%' : 'auto',
    //         maxHeight: this.mobile ? '100%' : '85vh',
    //         panelClass: 'no-padding-modal',
    //         autoFocus: false
    //     });
    // }

    public copy(source: any) {
        return JSON.parse(JSON.stringify(source));
    }

    public redirect(url: string, target?: string) {
        if (!url || url.length === 0) {
            return;
        }

        if (!url.startsWith('http')) {
            url = 'https://' + url;
        }

        window.open(url, target ? target : '_blank');
    }

    public log(message: string) {
        // Customize sua mensagem de log, inserindo data, horario, etc.
        console.log('---------------------');
        console.log(message);
        console.log('---------------------');
    }

    public error(message: string) {
        // Customize sua mensagem de erro, inserindo data, horario, etc.
        console.error('---------------------');
        console.error(message);
        console.error('---------------------');
    }
}