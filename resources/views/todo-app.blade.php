@extends('index')
@section('extraJS')
    <script src="http://localhost:8081/public/js/todoapp.js"></script>
@endsection

@section('content')
    <div id="root"
        data-userid=1
        data-baseurl="{{url('/')}}"
        data-useremail='dharmik.jampala@knolskape.com'
    >APP CONTEXT</div>
@endsection