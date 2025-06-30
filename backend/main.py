from fastapi import FastAPI
from models import Reserva
import crud
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/reservas/")
def crear_reserva(reserva: Reserva):
    crud.crear_reserva(reserva)
    return {"mensaje": "Reserva creada exitosamente"}
