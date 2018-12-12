using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.Experimental.UIElements;

public class LightScript : MonoBehaviour
{

    private float speed = 1000f;
    public Vector3 targetPos;
    public bool isMoving;
    const int Mouse = 0;
    
    void Start () {
 
        targetPos = transform.position;
        isMoving = false;
    }
     
    // Update is called once per frame
    void Update () {
     
            SetTargetPosition();
        
        if(isMoving)
        {
            MoveObject();
        }
    }
    void SetTargetPosition()
    {
        targetPos = new Vector3(Input.mousePosition.x,Input.mousePosition.y);

         
        isMoving = true;
    }
    void MoveObject()
    {
        transform.position = Vector3.MoveTowards(transform.position, targetPos, speed * Time.deltaTime);
 
        if (transform.position == targetPos)
            isMoving = false;
 
    }
}
