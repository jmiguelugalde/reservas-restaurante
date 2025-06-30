from database import get_connection
from models import Reserva

def crear_reserva(reserva: Reserva):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO reservas (nombre, telefono, fecha, hora, personas) VALUES (%s, %s, %s, %s, %s)",
                   (reserva.nombre, reserva.telefono, reserva.fecha, reserva.hora, reserva.personas))
    conn.commit()
    cursor.close()
    conn.close()

def obtener_reservas():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM reservas")
    resultados = cursor.fetchall()
    cursor.close()
    conn.close()

    for r in resultados:
        if r['hora'] is not None:
            td = r['hora']  # es un timedelta
            total_seconds = int(td.total_seconds())
            hours = total_seconds // 3600
            minutes = (total_seconds % 3600) // 60
            seconds = total_seconds % 60
            r['hora'] = f"{hours:02d}:{minutes:02d}:{seconds:02d}"

    return resultados

def editar_reserva(reserva_id: int, reserva: Reserva):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE reservas
        SET nombre = %s,
            telefono = %s,
            fecha = %s,
            hora = %s,
            personas = %s
        WHERE id = %s
    """, (reserva.nombre, reserva.telefono, reserva.fecha, reserva.hora, reserva.personas, reserva_id))
    conn.commit()
    cursor.close()
    conn.close()

def eliminar_reserva(reserva_id: int):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM reservas WHERE id = %s", (reserva_id,))
    conn.commit()
    cursor.close()
    conn.close()


