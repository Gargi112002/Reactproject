import Tile from  "../Tile/Tile" ;
import "./Chessboard.css";

const verticalAxis =["1","2","3","4","5","6","7","8"];
const horizontalAxis =["a","b","c","d","e","f","g","h"];

interface Piece {
    image: string; 
    x: number;
    y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
    pieces.push({image: "asests/image/pawn_b.png",x: i,y: 6 }); 
}
for (let i = 0; i < 8; i++) {
    pieces.push({image: "asests/image/pawn_w.png",x: i,y: 1 }); 
}

pieces.push({image: "asests/image/rook_b.png",x: 0,y: 7});
pieces.push({image: "asests/image/rook_b.png",x: 7,y: 7});
pieces.push({image: "asests/image/knight_b.png",x: 1,y: 7});
pieces.push({image: "asests/image/knight_b.png",x: 6,y: 7});
pieces.push({image: "asests/image/bishop_b.png",x: 2,y: 7});
pieces.push({image: "asests/image/bishop_b.png",x: 5,y: 7});
pieces.push({image: "asests/image/queen_b.png",x: 4,y: 7});
pieces.push({image: "asests/image/king_b.png",x: 3,y: 7});

pieces.push({image: "asests/image/rook_w.png",x: 0,y: 0});
pieces.push({image: "asests/image/rook_w.png",x: 7,y: 0});
pieces.push({image: "asests/image/knight_w.png",x: 1,y: 0});
pieces.push({image: "asests/image/knight_w.png",x: 6,y: 0});
pieces.push({image: "asests/image/bishop_w.png",x: 2,y: 0});
pieces.push({image: "asests/image/bishop_w.png",x: 5,y: 0});
pieces.push({image: "asests/image/queen_w.png",x: 3,y: 0});
pieces.push({image: "asests/image/king_w.png",x: 4,y: 0});


export default function Chessboard() {
    let board = [];

        for(let j = verticalAxis.length - 1; j >=0 ; j--){
            for(let i = 0; i < horizontalAxis.length; i++) {
                const number = j + i + 2;
                let image =undefined;

                pieces.forEach(p => {
                    if(p.x === i && p.y === j) {
                        image =p.image;
                    }
         
                });
                board.push(<Tile image={image} number={number} />);
            
            }    
        }

     return <div id="chessboard">{board}</div>;
 }