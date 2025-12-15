public class transposematrix{
    public static void main(String args[]){ 
        int row = 3, col = 2;
        int matrix[][] = new int[row][col];

        // Display original matrix 
        printMatrix(matrix);

        // Transpose the matrix ->
        int transpose[][] = new int[col][row];
        for(int i = 0; i<row ; i++){
            for(int j = 0; j<col; j++){
                transpose[j][i] = matrix[i][j];
            }
        }

        // print the transposed matrix ->
        printMatrix(transpose);
    }

    public static void printMatrix(int matrix[][]){
        System.out.println("The matrix is -> ");
        for(int i = 0; i<matrix.length ; i++){
            for(int j=0; j<matrix[0].length; j++){
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}