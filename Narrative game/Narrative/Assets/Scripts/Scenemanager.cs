using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Scenemanager : MonoBehaviour
{
	public Button button;
	private SceneManager _scenemanager;
	private AudioClip audio;
	private AudioSource _AudioSource;

	// Use this for initialization
	void Start ()
	{
		audio = GetComponent<AudioClip>();
	 _AudioSource = GetComponent<AudioSource>();

	}
	
	// Update is called once per frame
	void Update () {
		button.onClick.AddListener(TaskonCall);
		
		
	}

	void TaskonCall()
	{
		
		SceneManager.LoadScene("SampleScene");
		_AudioSource.Play();

	}

}
