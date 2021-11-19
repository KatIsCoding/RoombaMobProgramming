class Solution {
    solve(moves, x, y) {
        let position = [0,0]
        let movesMap = {
            "NORTH": [0,1],
            "SOUTH": [0,-1],
            "EAST": [1, 0],
            "WEST": [-1,0]
        }
        for(let move of moves){
            position[0] += movesMap[move][0]
            position[1] += movesMap[move][1]
        }
        // O(n)
        // O(1)
        return position[0] === x && position[1] === y
    }
}
