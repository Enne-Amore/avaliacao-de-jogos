import mysql.connector
from mysql.connector import Error

def conectar_banco():
    try:
        # Conectar ao banco de dados MySQL
        conexao = mysql.connector.connect(
            host='localhost',  
            user='root',  
            password='0000',   
            database='avaliacoes'   
        )

        if conexao.is_connected():
            print("Conexão bem-sucedida ao banco de dados 'avaliacoes'")

        return conexao

    except Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None

conexao = conectar_banco()

if conexao:
    conexao.close()
