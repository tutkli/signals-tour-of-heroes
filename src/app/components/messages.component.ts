import {Component} from '@angular/core';
import {MessageService} from "../services/message.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-messages',
    standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
    template: `
        <div *ngIf="messageService.messages.length">
            <h2>Messages</h2>
            <button type="button" class="clear"
                    (click)="messageService.clear()">Clear messages
            </button>
            <div *ngFor='let message of messageService.messages'> {{message}} </div>
        </div>
    `,
    styles: [`
      /* MessagesComponent's private CSS styles */
      h2 {
        color: #A80000;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
      }

      .clear {
        color: #333;
        background-color: #eee;
        margin-bottom: 12px;
        padding: 1rem;
        border-radius: 4px;
        font-size: 1rem;
      }

      .clear:hover {
        color: white;
        background-color: #42545C;
      }
    `],
})
export class MessagesComponent {
    constructor(public messageService: MessageService) {
    }
}
