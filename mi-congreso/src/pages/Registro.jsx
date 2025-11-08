import React, { useState } from 'react'
import { postRegistro } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function Registro() {
    const nav = useNavigate()
    const [form, setForm] = useState({ nombre: '', apellidos: '', email: '', twitter: '', ocupacion: '', avatar: '', acepto: false })

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await postRegistro(form)
            nav('/participantes')
        } catch (err) {
            alert('Error al guardar')
        }
    }

    return (
        <div className="container py-4">
            <h3>Registro</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-2"><input className="form-control" placeholder="Nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} required /></div>
                <div className="mb-2"><input className="form-control" placeholder="Apellidos" value={form.apellidos} onChange={e => setForm({ ...form, apellidos: e.target.value })} required /></div>
                <div className="mb-2"><input type="email" className="form-control" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
                <div className="mb-2"><input className="form-control" placeholder="Twitter (usuario)" value={form.twitter} onChange={e => setForm({ ...form, twitter: e.target.value })} /></div>
                <div className="mb-2"><input className="form-control" placeholder="Ocupación" value={form.ocupacion} onChange={e => setForm({ ...form, ocupacion: e.target.value })} /></div>
                <div className="mb-2"><input className="form-control" placeholder="URL Avatar" value={form.avatar} onChange={e => setForm({ ...form, avatar: e.target.value })} /></div>
                <div className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id="acepto" checked={form.acepto} onChange={e => setForm({ ...form, acepto: e.target.checked })} />
                    <label className="form-check-label" htmlFor="acepto">Acepto términos y condiciones</label>
                </div>
                <button className="btn btn-success" type="submit">Guardar</button>
            </form>
        </div>
    )
}
