import { Component, OnInit } from '@angular/core';
import { Board } from '../Board'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  board: Board[];

  constructor(){
    this.board=[
      {
        squares: Array(9).fill(0),
        xIsNext: true,
        winner: ''
      }
    ]
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.board=[
      {
        squares: Array(9).fill(0  ),
        xIsNext: true,
        winner: ''
      }
    ]
  }


  // name of the player
  get Player(){
    return this.board[0].xIsNext ? 'X' : 'O';
  }


  makeMove(idx : number){
    if(!this.board[0].squares[idx])
    {
      this.board[0].squares.splice(idx, 1, this.Player)
      this.board[0].xIsNext = !this.board[0].xIsNext;
    }

    this.board[0].winner = this.calculateWinner();
  }
  
  calculateWinner() {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) 
    {
      const [a, b, c] = lines[i];
      if (
        this.board[0].squares[a] &&
        this.board[0].squares[a] === this.board[0].squares[b] &&
        this.board[0].squares[a] === this.board[0].squares[c]
      ) 
      {
        return this.board[0].squares[a];
      }
    }
    return null;
  }

}
