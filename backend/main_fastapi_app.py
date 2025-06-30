from fastapi import FastAPI
from models import Reserva
import crud as crud
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path

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

@app.get("/reservas/")
def obtener_reservas():
    return crud.obtener_reservas()

@app.delete("/reservas/{reserva_id}")
def eliminar_reserva(reserva_id: int):
    crud.eliminar_reserva(reserva_id)
    return {"mensaje": "Reserva eliminada exitosamente"}

@app.put("/reservas/{reserva_id}")
def editar_reserva(reserva_id: int, reserva: Reserva):
    crud.editar_reserva(reserva_id, reserva)
    return {"mensaje": "Reserva actualizada exitosamente"}


#Montar frontend
frontend_path = Path(__file__).resolve().parent.parent / "frontend"
app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main_fastapi_app:app", host="127.0.0.1", port=8000, reload=True)
