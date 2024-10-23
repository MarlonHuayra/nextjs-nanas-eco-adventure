// src/app/api/firebaseUsers/route.js
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { NextResponse } from 'next/server';
import * as admin from 'firebase-admin';
import serviceAccount from '@/libs/serviceAccountKey.json';
// Ruta a tu archivo JSON de credenciales

// Inicializa Firebase Admin SDK con el archivo de credenciales
if (!admin.apps.length) {
  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: "https://nanasgame-261b8.firebaseio.com", // Usa tu URL de base de datos real
  });
}

// Manejador de la API
export async function GET() {
  try {
    const auth = getAuth(); // Obtiene la instancia de autenticación de Firebase Admin
    const listUsersResult = await auth.listUsers(); // Obtiene la lista de usuarios autenticados

    // Filtra los usuarios que usaron el método de Correo electrónico/Contraseña
    const users = listUsersResult.users
      .filter(user => user.providerData.some(provider => provider.providerId === 'password'))
      .map(user => ({
        uid: user.uid,
        email: user.email,
        creationTime: user.metadata.creationTime,
      }));

    // Devuelve la lista de usuarios autenticados por email
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
