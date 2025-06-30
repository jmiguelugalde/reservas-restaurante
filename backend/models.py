from pydantic import BaseModel

class Reserva(BaseModel):
    nombre: str
    telefono: str
    fecha: str
    hora: str
    personas: int
