export class OfertaForm{

    constructor(id: number, titulo: string, descripcion: string, empresa: string, salario: number, ciudad: string, email: string) {
      this._id = id;
      this._titulo = titulo;
      this._descripcion = descripcion;
      this._salario = salario;
      this._ciudad = ciudad;
      this._empresa = empresa;
      this._email = email;
    }
  
  
    private _id: number;
  
    private _titulo: string;
  
    private _descripcion: string;
  
    private _salario: number;

    private _ciudad: string;

    private _empresa: string;

    private _email: string;

  
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
    
    get titulo(): string {
      return this._titulo;
    }
  
    set titulo(value: string) {
      this._titulo = value;
    }
  
    get descripcion(): string {
      return this._descripcion;
    }
  
    set descripcion(value: string) {
      this._descripcion = value;
    }
  
    get salario(): number {
      return this._salario;
    }
  
    set salario(value: number) {
      this._salario = value;
    }

    get ciudad(): string {
        return this._ciudad;
    }

    set ciudad(value: string) {
    this._ciudad = value;
    }

    get empresa(): string {
    return this._empresa;
    }

    set empresa(value: string) {
    this._empresa = value;
    }

    get email(): string {
    return this._email;
    }

    set email(value: string) {
    this._email = value;
    }
  
  }