_RELACIONES:_

*TURNO* 
-Paciente (1:N)
Un paciente puede tener muchos turnos, pero cada turno le pertenece a un solo paciente.
Para hacer esta relación, utilizo la forma referencial porque pueden haber muchos tuernos y los documentos de los pacientes pueden terminar siendo muy largos y, utilizando .populate(), se pueden traer los datos del paciente solo cuando haga falta.

-Room (1:1)
Cada turno se da en un único consultorio.
Se utilizó la forma embebida porque "room" es un dato simple y no es necesario guardarlo en otra colección.

-Doctor (1:N)
No me convenía relacionarlos de forma embebida porque los turnos cambian constantemente y pueden llegar a volverse enormes en cantidad.

*PATIENT*
-Obra social (1:1)
La obra social lo consideré como un dato directamente asociado con el paciente y no crece de forma infinita, por lo tanto, si se referencia, tendría que hacer un populate innecesario para algo ya fijo del paciente, por eso decidí relacionarlo de forma embebida. 

-Doctor (N:M)
A un paciente lo atienden muchos doctores, un doctor atiende a muchos pacientes.
Referencial para evitar el duplicado de información y, además los arrays puedem crecer mucho. 

*HISTORIA CLÍNICA*
-Paciente (1:1)
Se hizo de forma referencial para no tener que duplicar pacientes dentro de la historia; si se borra o se edita algún paciente todo se sincroniza. 

-Diagnoses (1:1)
Embebido porque los diagnósticos están siempre ligados a la historia clínica.

-Doctor (1:N)
Referencial porque si se hace de forma embebida, y en caso de que los datos del doctor, se tendrían que cambiar en muchas historias clínicas. 


_INVESTIGACIÓN:_

*POPULATE*
El metodo populate en Mongoose, sirve para traer documentos completos de otra colección a partir de un ObjectId.
Ahora, si una colección no tiene referencias directas, igual se puede hacer algo parecido con dos enfoques: 

_Virtual Populate:_
-Se definen "referencias virtuales", en el schema usando ref + localField + foreignField.
-Esto no guarda físicamete la relacion de la coleccion pero deja consultarla como si existiese. 

*ELIMINACIONES:*
_LÓGICA:_
No se borra el documento de la base de datos, sino que se marca con un flag (isDeleted: true, active: true)

_CASCADA:_
Cuando se borra un documento, también se borran o actualizan los q dependen de él