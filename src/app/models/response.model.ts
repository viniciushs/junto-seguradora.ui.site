import { Page } from './page.model';

export class AppResponse {
    public page: Page;
    public data: any;
    public success: boolean;
    public message: string;
    public notifications: string[];
}
