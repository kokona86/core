import Matrix3D					= require("awayjs-core/lib/geom/Matrix3D");
import Vector3D					= require("awayjs-core/lib/geom/Vector3D");
import IEventDispatcher			= require("awayjs-core/lib/events/IEventDispatcher");

/**
 * IMaterialOwner provides an interface for objects that can use materials.
 *
 * @interface away.base.IMaterialOwner
 */
interface IProjection extends IEventDispatcher
{
	coordinateSystem:string;

	frustumCorners:Array<number>

	matrix:Matrix3D;

	near:number;

	originX:number;

	originY:number;

	far:number;

	_iAspectRatio:number;

	project(point3d:Vector3D):Vector3D;

	unproject(nX:number, nY:number, sZ:number):Vector3D;

	_iUpdateScissorRect(x:number, y:number, width:number, height:number);

	_iUpdateViewport(x:number, y:number, width:number, height:number);
}

export = IProjection;