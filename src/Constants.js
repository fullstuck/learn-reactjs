const Constants = {
    calculateWinner : (squares) => {
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
    
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return { winner: squares[a], winnerRow: lines[i] };
            }
        }
        return { winner: null, winnerRow: null };
    },
    
    getLocation : (move) => {
      const locationMap = {
        0: 'row: 1, col: 1',
        1: 'row: 1, col: 2',
        2: 'row: 1, col: 3',
        3: 'row: 2, col: 1',
        4: 'row: 2, col: 2',
        5: 'row: 2, col: 3',
        6: 'row: 3, col: 1',
        7: 'row: 3, col: 2',
        8: 'row: 3, col: 3'
      };
    
      return locationMap[move];
    }
}


export default Constants;