Equipo 5 - Evaluación 2

Calificación: 11/20

Desglose:
- Análisis del sistema actual: 1.5/6
- Diseño propuesto MVC: 3/4
- Implementación MVC: 4.5/6
- Uso de Git: 1.5/2
- README: 0.2/2

Fortalezas:
El repositorio evidencia trabajo técnico real y una implementación práctica acorde con lo indicado para esta evaluación. Se recuerda que la evaluación no exigía un sistema grande, sino demostrar comprensión del patrón MVC; en ese sentido, el grupo avanzó con un módulo sencillo pero pertinente, basado en login y gestión de usuarios.

Se observa una estructura backend con Node.js y Express, separando rutas, controladores, modelos y servicios. También se identifica un frontend con React/Vite. Existen rutas para autenticación y usuarios, controladores para login y CRUD, modelo Usuarios, conexión a base de datos MySQL y servicio para validar credenciales y generar token.

También se observa actividad en Git mediante ramas y pull requests relacionados con modelos, controladores, rutas, frontend y correcciones.

Aspectos a mejorar:
El principal problema de la entrega es la falta de documentación. El README está prácticamente vacío y solo contiene el título del proyecto. Esto afecta significativamente la evaluación porque el README era obligatorio y debía contener descripción del proyecto, diagnóstico inicial, arquitectura MVC, cambios realizados, evidencia en Git y cómo ejecutar el sistema.

No se evidencia claramente el análisis del sistema actual. Aunque el código muestra una estructura por capas, el grupo no documentó qué estaba mal antes, qué responsabilidades se separaron ni qué parte del sistema fue implementada bajo MVC.

Aunque hay separación entre rutas, controladores, modelos y servicios, la implementación todavía puede mejorar. El servicio de login consulta directamente la base de datos, el modelo concentra bastante lógica SQL, y algunos detalles técnicos deben corregirse, como el uso de throw new error en minúscula dentro del modelo.

Los mensajes de Git pueden mejorar. Aunque hay actividad, varios mensajes son genéricos como “Correccion” o “UPdate”. Se recomienda usar mensajes más descriptivos como feat, fix, refactor o docs.

Recomendación:
Completar el README con todos los puntos solicitados, documentar el diagnóstico inicial, explicar claramente la arquitectura MVC aplicada y mejorar la separación de responsabilidades entre servicios, modelos y controladores.
